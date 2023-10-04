interface Props {
    params: {
        id: number
        photoId: number
    }
}

const PhotoPage = ({params}: Props) => {
    const {id} = params
    const {photoId} = params
  return (
    <div>
      photo with id of {photoId} for person of {id}
    </div>
  )
}

export default PhotoPage
