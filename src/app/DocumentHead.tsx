import React from "react";
import { Head } from "next/document";

function dedupeHead(elems: React.ReactElement<any, string>[]) {
  const result: React.ReactElement[] = [],
    mapper: { [key: string]: number } = {};

  if (elems) {
    for (let i = 0, len = elems.length; i < len; i++) {
      const elem = elems[i],
        type = elem.type,
        props = elem.props;

      /** Dedupe */
      switch (type) {
        case "meta":
          let key = props.itemprop || props.property || props.name;

          if (key) {
            if (Object.prototype.hasOwnProperty.call(mapper, key)) {
              // This meta is already in the result,
              // Replace the one in result with this
              const dupeMetaIdx = mapper[key];
              result[dupeMetaIdx] = elem;
            } else {
              // Save the elem's index in result.
              mapper[key] = result.push(elem) - 1;
            }
          } else {
            // Do not handle deduping for unknown case
            result.push(elem);
          }

          break;
        default:
          // Do not handle deduping for unknown case
          result.push(elem);
          break;
      }
    }
  }

  return result;
}

class DocumentHead extends Head {
  render() {
    this.context.head = dedupeHead(this.context.head);
    return super.render();
  }
}

export default DocumentHead;
