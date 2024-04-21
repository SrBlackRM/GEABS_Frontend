import { Image } from "../interfaces/image";

interface HookSizeReturn {
    width: string,
    height: string
}

export default function useImageGetSize(image: Image): HookSizeReturn{
    return {width:String(image.size?.width[0])+image.size?.width[1], height:String(image.size?.height[0])+image.size?.height[1]};
}