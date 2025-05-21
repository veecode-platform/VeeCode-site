/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Formik, Form } from "formik";
import { useTranslations } from "next-intl";
import TagManager from "react-gtm-module";
import { object, string } from "yup";
import { Checkbox, Input, TextArea } from "./components/input";
import { UseContactData } from "@/hooks/useContactData";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

interface FormElementProps {
  company?: boolean;
  checkbox?: any;
  type: string;
}

export const FormElement: React.FC<FormElementProps> = ({
  company,
  checkbox,
  type,
}) => {
  const t = useTranslations("contactUs.form");

  const formSchema = object({
    name: string().required("*required"),
    company: string().required("*required").default(null),
    email: string().email("*invalid email").required("*required"),
    question: string().required("*required"),
  });

  const router = useRouter();

  const tagManagerArgs = {
    gtmId: "GTM-56RG967",
    events: {
      generateLead: {
        currency: "USD",
        value: 1,
      },
    },
  };

  return (
    <div className="p-4 w-full flex justify-center items-center flex-col">
      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          question: "",
          type: type,
          vkpr: false,
          safiracli: false,
          support: false,
          devportal: false,
        }}
        validationSchema={formSchema}
        onSubmit={async (values) => {
          try {
            await UseContactData(values);
            TagManager.initialize(tagManagerArgs);
            router.push("/contact-success");
          } catch (error: unknown) {
            console.error(error);
            router.push("/contact-failed");
          }
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-full flex justify-center items-center flex-col gap-8"
          >
            <Input
              name="name"
              placeholder={t("name.placeholder")}
              label={t("name.label")}
              error={errors.name && touched.name && errors.name}
            />
            <Input
              name="email"
              placeholder={t("email.placeholder")}
              label={t("email.label")}
              error={errors.email && touched.email && errors.email}
            />
            {company && (
              <Input
                name="company"
                placeholder={t("org.placeholder")}
                label={t("org.label")}
                error={errors.company && touched.company && errors.company}
              />
            )}
            {checkbox && (
              <div className="flex justify-start items-start w-full flex-nowrap">
                <h1>Which products are you interested in?</h1>
                <Checkbox name="vkpr">VKPR</Checkbox>
                <Checkbox name="safiracli">Safira-cli</Checkbox>
                <Checkbox name="support">Expert Support</Checkbox>
                <Checkbox name="devportal">Devportal</Checkbox>
              </div>
            )}
            <TextArea
              name="question"
              placeholder={t("message.placeholder")}
              label={t("message.label")}
              error={errors.question && touched.question && errors.question}
            ></TextArea>

            <div className="flex w-full justify-center items-center">
              <Button
                aria-label={t("buttonLabel")}
                type="submit"
                disabled={isSubmitting}
              >
                {t("buttonLabel")}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
