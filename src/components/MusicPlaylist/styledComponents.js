import styled from 'styled-components'

export const MusicPlaylistContainer = styled.div`
  background-color: #152850;
  height: 100vh;
`

export const MusicArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 40vh;
  padding-top: 0px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  padding-left: 40px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 42px;
  font-weight: bold;
`

export const SongsPlayList = styled.div`
  padding-top: 15px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`

export const SongsPlayListHeader = styled.h1`
  font-family: 'Roboto';
  color: #fff;
  font-size: 30px;
`

export const SongsSearchInput = styled.input`
  height: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 20px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #cbd5e1;
  padding: 5px;
  border-radius: 5px;
`
export const MusicList = styled.ul`
  height: 45vh;
  overflow: scroll;
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const EmptyName = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #fff;
`
