import { deleteAlbumItem } from "../actions/delete-album";

const message: string = "Are you sure that you would like to delete this item?";

export const useAlbumDelete = (
  setImages: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const onSubmitDelete = async (location: string) => {
    const confirm: boolean = window.confirm(message);
    if (!confirm) return;

    try {
      await deleteAlbumItem(location);
      setImages((prevImagesData) =>
        prevImagesData.filter(
          (imageData: any) => imageData.location !== location
        )
      );
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  return { onSubmitDelete };
};
