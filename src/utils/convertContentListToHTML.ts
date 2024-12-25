export const convertContentListToHTML = (
    contentList: Array<{
      type: string;
      value: string;
      styles?: Record<string, string>;
      attributes?: Record<string, string>;
    }>
  ): string => {
    return contentList
      .map((content) => {
        switch (content.type) {
          case "text":
            let styledContent = content.value;
  
            if (content.styles?.fontStyle === "italic") {
              styledContent = `<i>${styledContent}</i>`;
            }
  
            if (content.styles?.fontWeight === "bold") {
              styledContent = `<b>${styledContent}</b>`;
            }
  
            if (content.styles?.textDecoration === "underline") {
              styledContent = `<u>${styledContent}</u>`;
            }
  
            if (content.styles?.textDecoration === "line-through") {
              styledContent = `<s>${styledContent}</s>`;
            }
  
            const fontSize = content.styles?.fontSize;
            const fontSizeStyle =
              fontSize && +fontSize >= 8 && +fontSize <= 96
                ? `font-size: ${fontSize}px;`
                : "";
  
            const textAlign = content.styles?.textAlign;
            const textAlignStyle =
              textAlign === "left" || textAlign === "center"
                ? `text-align: ${textAlign};`
                : "";
  
            const combinedStyles = `${fontSizeStyle} ${textAlignStyle}`.trim();
  
            return `<p style="${combinedStyles}">${styledContent}</p>`;
  
          case "ordered-list":
            const orderedListType = content.styles?.listStyleType || "decimal";
            const listStyleType = {
              "lower-alpha": "lower-alpha",
              "lower-greek": "lower-greek",
              "lower-roman": "lower-roman",
              "upper-alpha": "upper-alpha",
              "upper-roman": "upper-roman",
              decimal: "decimal",
            }[orderedListType] || "decimal";
  
            const orderedListItems = content.value
              .split("\n")
              .map((item) => `<li>${item}</li>`)
              .join("");
            return `<ol style="list-style-type: ${listStyleType};">${orderedListItems}</ol>`;
  
          case "unordered-list":
            const unorderedListType = (content.styles?.listStyleType as
              | "circle"
              | "disc"
              | "square") || "disc";
            const listStyleTypes = {
              circle: "circle",
              disc: "disc",
              square: "square",
            };
  
            const listStyle = listStyleTypes[unorderedListType] || "disc";
  
            const unorderedListItems = content.value
              .split("\n")
              .map((item) => `<li>${item}</li>`)
              .join("");
            return `<ul style="list-style-type: ${listStyle};">${unorderedListItems}</ul>`;
  
          case "quote":
            const quoteLevel = content.styles?.quoteLevel || "1";
            const padding = `padding-left: ${+quoteLevel * 10}px;`;
            return `<blockquote style="${padding}">${content.value}</blockquote>`;
  
          case "link":
            const href = content.attributes?.href || "#";
            const target = content.attributes?.target || "_self";
            return `<a href="${href}" target="${target}">${content.value}</a>`;
  
          case "image":
            const src = content.attributes?.src || "";
            const alt = content.attributes?.alt || "";
            const width = content.styles?.width || "auto";
            const height = content.styles?.height || "auto";
            return `<img src="${src}" alt="${alt}" style="width: ${width}; height: ${height};" />`;
  
          case "checkbox":
            return `<label><input type="checkbox" class="border-2 border-gray-400 rounded-md checked:border-blue-500 checked:bg-blue-500 focus:outline-none focus:ring-0 mr-2" />${content.value}</label>`;
  
          default:
            return `<p>${content.value}</p>`;
        }
      })
      .join("");
  };
  