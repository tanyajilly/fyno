export interface Highlight {
    day: number;
    id: number;
    name: string;
    type: string[];
    time: number;
    pick: boolean;
    image: string;
}

export interface Stay {
    id: number;
    name: string;
    type: string;
    rating: number;
    price: number;
    pick: boolean;
    image: string;
}

export interface Exploration {
    name: string;
    features: string[];
    descr: string;
    highlights: Highlight[];
    stay: Stay[];
}
