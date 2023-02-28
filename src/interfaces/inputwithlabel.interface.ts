import { ChildrenInterface } from "./childElement.interface";

export interface InputwithlabelInterface extends ChildrenInterface {
    variant?: 'vertical' | 'horizontal'
    label?: string
}