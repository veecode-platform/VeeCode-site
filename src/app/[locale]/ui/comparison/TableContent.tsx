"use client";

import React from "react";
import CheckIcon from "@/components/CheckIcon";
import NotIcon from "@/components/NotIcon";
import { useTranslations } from "next-intl";

const TableContent = () => {
  const t = useTranslations("comparison.table");
  const data = [
    {
      section: t("line1.col1"),
      rows: [
        [t("line2.col1"), t("line2.col2"), t("line2.col3")],
        [t("line3.col1"), t("line3.col2"), t("line3.col3")],
        [t("line4.col1"), t("line4.col2"), t("line4.col3")],
        [t("line5.col1"), t("line5.col2"), t("line5.col3")],
        [t("line6.col1"), t("line6.col2"), t("line6.col3")],
      ],
    },
    {
      section: t("line7.col1"),
      rows: [
        [t("line8.col1"), t("line8.col2"), t("line8.col3")],
        [t("line9.col1"), t("line9.col2"), t("line9.col3")],
      ],
    },
    {
      section: t("line10.col1"),
      rows: [
        [t("line11.col1"), t("line11.col2"), t("line11.col3")],
        [t("line12.col1"), t("line12.col2"), t("line12.col3")],
      ],
    },
    {
      section: t("line13.col1"),
      rows: [
        [t("line14.col1"), t("line14.col2"), t("line14.col3")],
        [t("line15.col1"), t("line15.col2"), t("line15.col3")],
        [t("line16.col1"), t("line16.col2"), t("line16.col3")],
      ],
    },
    {
      section: t("line17.col1"),
      rows: [
        [t("line18.col1"), t("line18.col2"), t("line18.col3")],
        [t("line19.col1"), t("line19.col2"), t("line19.col3")],
        [t("line20.col1"), t("line20.col2"), t("line20.col3")],
      ],
    },
  ];

  const renderCell = (value: string) => {
    if (value === "✓")
      return (
        <div className="flex justify-center items-center">
          <CheckIcon />
        </div>
      );
    if (value === "—")
      return (
        <div className="flex justify-center items-center">
          <NotIcon />
        </div>
      );
    return <span className="text-base">{value}</span>;
  };

  return (
    <div className="overflow-x-auto bg-white my-15">
      <table className="min-w-full text-base text-gray-900 text-left">
        <thead>
          <tr>
            <th className="p-4 border-b border-gray-300 align-middle">
              <span className="invisible">-</span>
            </th>
            <th className="p-4 border-b border-gray-300 text-lg text-center font-normal align-middle">
              {t("thead.label1")}
            </th>
            <th className="p-4 border-b border-gray-300 text-lg text-center font-normal align-middle">
              {t("thead.label2")}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((section, i) => (
            <React.Fragment key={i}>
              <tr>
                <td
                  className="p-4 font-semibold border-b border-gray-300"
                  colSpan={3}
                >
                  {section.section}
                </td>
              </tr>
              {section.rows.map((row, j) => (
                <tr key={j} className="border-b border-gray-300">
                  {row.map((cell, k) => (
                    <td
                      key={k}
                      className={`p-4 align-middle ${
                        k === 0 ? "text-left" : "text-center"
                      }`}
                    >
                      {renderCell(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
