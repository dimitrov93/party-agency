import React, { useMemo } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { useLocation, useParams } from "react-router-dom";
import AlbumHeader from "./AlbumHeader";
import GalleryItem from "./GalleryItem";
import AddButton from "./AddButton";
import useGetAlbum from "../../../hooks/useGetAlbum";
import { useAlbumDelete } from "../../../hooks/useAlbumDelete";

const Album = () => {
  const { user } = useAuthContext();
  const { pathname } = useLocation();
  const { albumType } = useParams();
  const [images, setImages] = useGetAlbum();
  const { onSubmitDelete } = useAlbumDelete(setImages);

  const Skeleton = () => (
    <>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="gallery animate-pulse rounded-xl">
          <div className="relative w-full h-64 bg-[#fbf8f1] blur-sm  rounded-lg overflow-hidden" />
        </div>
      ))}
    </>
  );

  const Albums = useMemo(() => {
    return (
      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 max-sm:grid-cols-1">
        {images.length > 0 ? (
          images.map((item) => (
            <GalleryItem
              key={item.location}
              item={item}
              albumType={albumType}
              user={user}
              onDelete={onSubmitDelete}
            />
          ))
        ) : (
          <Skeleton />
        )}
      </div>
    );
  }, [images, albumType, user, onSubmitDelete]);

  return (
    <div className="container">
      {user?.email && <AddButton pathname={pathname} />}
      <AlbumHeader />
      {Albums}
    </div>
  );
};

export default React.memo(Album);
