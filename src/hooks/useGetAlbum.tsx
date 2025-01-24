import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../services/decorationService";

interface ImageItem {
  url: string;
}

interface AlbumFolder {
  folder: string;
  location: string;
  images: ImageItem[];
  created: string;
}

export default function useGetAlbum(): [
  AlbumFolder[],
  React.Dispatch<React.SetStateAction<AlbumFolder[]>>
] {
  const { albumType } = useParams();
  const [images, setImages] = useState<AlbumFolder[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAlbum(albumType);
      setImages(data);
    }
    fetchData();
  }, [albumType]);

  return [images, setImages];
}
