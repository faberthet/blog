export class UpdatePostDto {
    id!: number;
    title!:string;
    content!:string;
    summary!:string;
    author!:string;
    visible!:boolean;
    publishDate!: Date;
    updatedDate!: Date;
    featuredImageUrl!:string;
    categoryId!:number;
}
