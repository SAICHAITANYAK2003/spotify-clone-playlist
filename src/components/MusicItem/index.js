import {MdDelete} from 'react-icons/md'
import {
  MusicLiItem,
  MusicItemDetails,
  MusicItemLogo,
  MusicItemInfo,
  MusicItemName,
  MusicItemGenre,
  MusicTimeAndDelete,
  MusicDuration,
  DeleteButton,
} from './styleComponents'

const MusicItem = props => {
  const {songDetails, onClickDeleteTrack} = props
  const {imageUrl, name, genre, duration, id} = songDetails

  const onDeleteItem = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicLiItem>
      <MusicItemDetails>
        <MusicItemLogo src={imageUrl} alt="track" />
        <MusicItemInfo>
          <MusicItemName>{name}</MusicItemName>
          <MusicItemGenre>{genre}</MusicItemGenre>
        </MusicItemInfo>
      </MusicItemDetails>
      <MusicTimeAndDelete>
        <MusicDuration>{duration}</MusicDuration>
        <DeleteButton type="button" onClick={onDeleteItem} data-testid="delete">
          <MdDelete color="#fff" size="25" />
        </DeleteButton>
      </MusicTimeAndDelete>
    </MusicLiItem>
  )
}

export default MusicItem
