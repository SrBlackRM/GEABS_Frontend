type ImageType = "icon" | "logo" | "banner";

type SizeProperty = [number:number, unity?: 'px' | 'rem' | 'vw' | 'vh' | '%'];

type ImageSize = {
    width: SizeProperty,
    height: SizeProperty,
}

export interface Image{
    type?: ImageType,
    src?: string,
    size?: ImageSize,
}
