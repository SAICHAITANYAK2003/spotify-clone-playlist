import styled from 'styled-components'

export const MusicLiItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`
export const MusicItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 25px;
`

export const MusicItemLogo = styled.img`
  height: 100px;
`

export const MusicItemInfo = styled.div`
  padding-left: 20px;
`

export const MusicItemName = styled.p`
  font-family: 'roboto';
  font-size: 25px;
  color: #fff;
`

export const MusicItemGenre = styled.p`
  font-family: 'roboto';
  font-size: 20px;
  color: #3b82f6;
`

export const MusicTimeAndDelete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`

export const MusicDuration = styled.p`
  color: #fff;
  font-size: 20px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
