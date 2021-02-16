export type Link = { href: string; templated?: true };

export type Links<Keys extends string> = Record<Keys, Link>;
