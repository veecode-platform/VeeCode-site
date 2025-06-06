/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Remark } from "react-remark";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGemoji from "remark-gemoji";
import { IPlugin } from "@/lib/@types/plugin";
import convertUrlToRaw from "@/lib/helpers/convertUrlToRaw";
import { ScrollTop } from "@/components/ui/ScrollTop";
import style from "./styles.module.css";

export interface PluginContentProps {
  pluginData: IPlugin;
}

const LinkTag = ({ href, children }: { href: string; children: any }) => {
  const label = children.join(" ");
  return <a href={href}>{label}</a>;
};

export const PluginContent: React.FC<PluginContentProps> = ({ pluginData }) => {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    const rawUrl = convertUrlToRaw(pluginData!.url);
    if (rawUrl) {
      fetch(rawUrl)
        .then((response) => response.text())
        .then((data) => {
          setContent(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [pluginData]);

  return (
    <section className={`${style.root} w-full`}>
      <Remark
        remarkPlugins={[remarkGemoji] as any}
        remarkToRehypeOptions={{ allowDangerousHtml: true }}
        rehypePlugins={[rehypeSlug, rehypeHighlight] as any}
        rehypeReactOptions={{
          components: {
            a: (props: any) => <LinkTag {...props} />,
          },
        }}
      >
        {content}
      </Remark>
      <ScrollTop />
    </section>
  );
};
