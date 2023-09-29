import React from "react";
import sanitizeHtml from "sanitize-html";

const Sanitize = ({ children }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(children, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          allowedAttributes: {
            img: [
              "src",
              "srcset",
              "alt",
              "title",
              "width",
              "height",
              "loading",
            ],
            a: ["href", "class", "style"],
            h1: ["style", "class"],
            span: ["style", "class"],
            table: ["style", "class", "border"],
            th: ["style", "class", "border"],
            tr: ["style", "class", "border"],
            td: ["style", "class", "border"],
          },
          allowedSchemes: ["data", "http", "https"],
        }),
      }}
    ></div>
  );
};

export default Sanitize;
