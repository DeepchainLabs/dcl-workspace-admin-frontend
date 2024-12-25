export const convertHTMLToContentList = (htmlContent: string): Array<{
  type: string;
  value?: string;
  styles?: Record<string, string>;
  attributes?: Record<string, string>;
}> => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const contentList: Array<{
    type: string;
    value?: string;
    styles?: Record<string, string>;
    attributes?: Record<string, string>;
  }> = [];

  const processNode = (node: Node): void => {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim()) {
      contentList.push({
        type: 'text',
        value: node.nodeValue.trim(),
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;

      switch (element.tagName.toLowerCase()) {
        case 'p':
          contentList.push({
            type: 'text',
            value: element.innerText,
            styles: extractStyles(element),
          });
          break;
        case 'ol':
          const orderedListItems = Array.from(element.children)
            .filter((child) => child.tagName.toLowerCase() === 'li')
            .map((li) => li.textContent || '')
            .join('\n');
          contentList.push({
            type: 'ordered-list',
            value: orderedListItems,
            styles: { listStyleType: getListStyleType(element) },
          });
          break;
        case 'ul':
          const unorderedListItems = Array.from(element.children)
            .filter((child) => child.tagName.toLowerCase() === 'li')
            .map((li) => li.textContent || '')
            .join('\n');
          contentList.push({
            type: 'unordered-list',
            value: unorderedListItems,
            styles: { listStyleType: getListStyleType(element) },
          });
          break;
        case 'blockquote':
          contentList.push({
            type: 'quote',
            value: element.innerText,
            styles: { quoteLevel: `${getQuoteLevel(element)}` },
          });
          break;
        case 'a':
          contentList.push({
            type: 'link',
            value: element.innerText,
            attributes: {
              href: element.getAttribute('href') || '',
              target: element.getAttribute('target') || '_self',
            },
          });
          break;
        case 'img':
          contentList.push({
            type: 'image',
            value: '', // Add empty string for image type
            attributes: {
              src: element.getAttribute('src') || '',
              alt: element.getAttribute('alt') || '',
            },
            styles: {
              width: element.style.width || 'auto',
              height: element.style.height || 'auto',
            },
          });
          break;
        case 'input':
          if (element instanceof HTMLInputElement && element.type === 'checkbox') {
            contentList.push({
              type: 'checkbox',
              value: element.checked ? 'I agree to the terms and conditions.' : '',
            });
          }
          break;
        case 'strong':
          contentList.push({
            type: 'text',
            value: element.innerText,
            styles: { fontWeight: 'bold' },
          });
          break;
        case 'em':
          contentList.push({
            type: 'text',
            value: element.innerText,
            styles: { fontStyle: 'italic' },
          });
          break;
        case 'span':
          const spanFontSize = element.style.fontSize || '';
          if (spanFontSize) {
            contentList.push({
              type: 'text',
              value: element.innerText,
              styles: { fontSize: spanFontSize },
            });
          }
          break;
        case 'b':
          contentList.push({
            type: 'text',
            value: element.innerText,
            styles: { fontWeight: 'bold' },
          });
          break;
        case 'i':
          contentList.push({
            type: 'text',
            value: element.innerText,
            styles: { fontStyle: 'italic' },
          });
          break;
        case 'u':
          contentList.push({
            type: 'text',
            value: element.innerText,
            styles: { textDecoration: 'underline' },
          });
          break;
        case 'del':
          contentList.push({
            type: 'text',
            value: element.innerText,
            styles: { textDecoration: 'line-through' },
          });
          break;
        default:
          contentList.push({
            type: 'text',
            value: element.innerText,
          });
          break;
      }
    }

    // Process child nodes recursively
    if (node.hasChildNodes()) {
      Array.from(node.childNodes).forEach(processNode);
    }
  };

  // Helper function to extract inline styles from an element
  const extractStyles = (element: HTMLElement): Record<string, string> => {
    const styles: Record<string, string> = {};
    const computedStyle = getComputedStyle(element);
    if (computedStyle.fontStyle === 'italic') styles.fontStyle = 'italic';
    if (computedStyle.fontWeight === 'bold') styles.fontWeight = 'bold';
    if (computedStyle.textDecoration === 'underline') styles.textDecoration = 'underline';
    if (computedStyle.textDecoration === 'line-through') styles.textDecoration = 'line-through';
    if (computedStyle.textAlign) styles.textAlign = computedStyle.textAlign;
    if (computedStyle.fontSize) styles.fontSize = computedStyle.fontSize;
    return styles;
  };

  // Helper function to get list style type
  const getListStyleType = (element: HTMLElement): string => {
    const listStyleType = element.style.listStyleType || 'decimal';
    return listStyleType;
  };

  // Helper function to get quote level (padding)
  const getQuoteLevel = (element: HTMLElement): number => {
    const paddingLeft = window.getComputedStyle(element).paddingLeft;
    return parseInt(paddingLeft) / 10; // Assuming padding is set in increments of 10px
  };

  // Start processing the root HTML content
  processNode(doc.body);

  return contentList;
};
