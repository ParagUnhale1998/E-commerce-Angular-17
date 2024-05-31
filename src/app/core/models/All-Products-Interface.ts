export interface IAllProductsResponse {
  products: IProduct[];
}

export interface IProduct {
  id: string;
  handle: string;
  title: string;
  vendor: string;
  availableForSale: boolean;
  onlineStoreUrl: string;
  tags: string[];
  priceRange: PriceRange;
  featuredImage: FeaturedImage;
  options: Option[];
  images: Images;
  variants: Variants;
  created_at: number;
  selectedSize?: string;
  selectedQuantity?: number;
  totalValue?: string;
  altText?: string | null;
}

export interface PriceRange {
  maxVariantPrice: MaxVariantPrice;
  minVariantPrice: MinVariantPrice;
}

export interface MaxVariantPrice {
  amount: string;
}

export interface MinVariantPrice {
  amount: string;
}

export interface FeaturedImage {
  id: string;
  url: string;
}

export interface Option {
  id: string;
  name: string;
  values: string[];
}

export interface Images {
  nodes: Node[];
}

export interface Node {
  id: string;
  url: string;
  altText?: string;
}

export interface Variants {
  nodes: Node2[];
}

export interface Node2 {
  id: string;
  availableForSale: boolean;
  quantityAvailable: number;
  compareAtPrice?: CompareAtPrice;
  selectedOptions: SelectedOption[];
  currentlyNotInStock: boolean;
  featured_image: FeaturedImage2;
  price: Price;
  title: string;
  sku: string;
}

export interface CompareAtPrice {
  currencyCode: string;
  amount: string;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface FeaturedImage2 {
  id: string;
  src: string;
  altText?: string;
  position?: number;
}

export interface Price {
  currencyCode: string;
  amount: string;
}
