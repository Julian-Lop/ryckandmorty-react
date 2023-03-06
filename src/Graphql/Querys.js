import {gql} from '@apollo/client'

export const CHARACTERS_PAGE = gql`
    query getCharacters($pag: Int){
      characters(page: $pag) {
        info {
          count
          next
          prev
          pages
        },
        results {
          id
          name
          image
        }
      }
    }
  `

export const LOCATIONS_PAGE = gql`
  query getLocations($pag: Int) {
    locations(page: $pag){
      info {
        count
        next
        prev
        pages
      },
      results {
        id
        name
        type
        dimension
      }
    }
  }
`

export const EPISODES_PAGE = gql`
    query getEpisodes($pag:Int){
      episodes(page: $pag) {
        info {
          count
          next
          prev
          pages
        },
        results {
          id
          name
          air_date
          episode
        }
      }
    }
  `

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!){
    character(id: $id){
      id,
      name,
      status,
      species,
      type,
      gender,
      origin{
        id,
        name
      },
      location{
        id,
        name
      },
      image,
      episode{
        id,
        name
      }
    }
  }
`

export const GET_LOCATION = gql`
  query getLocation($id: ID!){
    location(id: $id) {
      id
      name,
      type,
      dimension,
      residents {
        id,
        name
      }
    }
  }
`

export const GET_EPISODE = gql`
  query getEpisode($id: ID!){
    episode(id: $id){
      id,
      name,
      air_date,
      episode,
      characters{
        id,
        name
      }
    }
  }
`

export const CHARACTERS_PAGE_FILTER = gql`
query getCharacters($pag: Int,$nameF: String,$stat: String,$typ: String, $gen: String){
  characters(page:$pag,filter:{name:$nameF, status: $stat,type:$typ, gender: $gen}){
    info{
      count,
      pages,
      next,
      prev  
    },
    results{
      id
      name
      image
    }
  }
}
`

export const LOCATIONS_PAGE_FILTER = gql`
query getLocations($pag: Int,$nameF: String,$typ: String, $dimen: String){
  locations(
    page:$pag,
    filter:{name:$nameF, type: $typ, dimension: $dimen}){
    info{
      count,
      pages,
      next,
      prev
    },
    results{
      id,
      name,
      dimension,
      type
    }
  }
}
`

export const EPISODES_PAGE_FILTER = gql`
query getEpisodes($pag: Int,$nameF: String,$episo:String){
  episodes(
    page:$pag,
    filter:{name:$nameF, episode:$episo}){
    info{
      count,
      pages,
      next,
      prev
    },
    results{
      id,
      name,
      air_date,
      episode
    }
  }
}
`
