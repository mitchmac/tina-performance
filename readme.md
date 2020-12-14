| Scenario | Lighthouse Performance | First Load JS |
| --- | ----------- | --- |
| [Baseline (No Tina)](https://tina-performance.netlify.app/) | 100 | 63.4kB |
| [Sidebar with text field](https://tina-performance.netlify.app/tina/sidebar) | 78 | 229kB |
| [Sidebar with text field & CMS disabled](https://tina-performance.netlify.app/tina/sidebar-cms-disabled) | 91 | 229kB |
| [Sidebar with Markdown WYSIWYG](https://tina-performance.netlify.app/tina/sidebar-wysiwyg) | 70 | 443kB |
| [Sidebar with Markdown WYSIWYG & CMS disabled](https://tina-performance.netlify.app/tina/sidebar-wysiwyg-cms-disabled) | 88 | 443kB |
| [Inline with text field](https://tina-performance.netlify.app/tina/inline) | 82  | 238kB |
| [Inline with text field & CMS disabled](https://tina-performance.netlify.app/tina/inline) | 83  | 238kB |

Todo:

* inline
* dynamic wysiwyg
* performance breakdown
* handle inconsistent lighthouse results