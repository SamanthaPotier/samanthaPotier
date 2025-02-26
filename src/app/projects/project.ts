export class Project {
    id!: number;
    display!: boolean;
    name!: string;
    slug!: string;
    thumbnail!: string;
    image!: string;
    domains!: string[];
    subTitle!: string;
    description!: string;
    intervention!: string;
    sectors!: string[];
    linkToProject? : string;
    slider!: boolean;
}