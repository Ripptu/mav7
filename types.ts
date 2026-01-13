export interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
}

export interface CursorContextType {
    setHovered: (isHovered: boolean) => void;
}