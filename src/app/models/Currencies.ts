export class Currency {
  meta: {
    total: number,
    pages: number,
  };
  links: {
    first: string,
    prev: string,
    next: string,
    last: string,
  };
  data?: (CurrencyData)[] | null;
}

export class CurrencyData {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: {
    countries: {
      links: {
        related: string
      }
    },
    parent: {
      data: {
        type: string,
        id: string,
      },
      links: {
        related: string
      }
    },
    issuer: {
      data: {
        type: string,
        id: string
      },
      links: {
        related: string
      }
    },
    issuer_organization: {
      data: {
        type: string,
        id: string
      },
      links: {
        related: string,
      }
    }
  };
  links: {
    self: string
  };
}

class Attributes {
  code: string;
  name: string;
  currency_type: string;
  code_iso_numeric3?: string | null;
  code_iso_alpha3?: string | null;
  code_estandards_alpha?: string | null;
  code_jsons_alpha?: string | null;
  symbol?: string | null;
  native_symbol?: string | null;
  exponent: number;
  parent_currency_multiplier: number;
  category: string;
  created: number;
  updated: number;
  icon: Icon;
  issuer?: string | null;
}

class Icon {
  timestamp?: null;
  image?: null;
}

