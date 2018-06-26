export interface Quote {
    id: number;
    type: number;
    text: string;
}

export interface Book {
    category: string;
    type: number;
    quotes: Quote[];
    icon: string;
}