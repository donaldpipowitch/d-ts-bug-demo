type Link = { href: string; templated?: true };

type Links<Keys extends string> = Record<Keys, Link>;

type Example = {
  links: Links<>;
};