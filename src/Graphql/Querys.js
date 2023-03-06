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