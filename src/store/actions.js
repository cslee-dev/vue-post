import * as types from "@/store/mutation-types.js";

const movies = [
  {
    id: 1,
    title: '이상한 나라의 엘리스',
    release_date : '2010-12-32',
    director : '이앨리스'
  },
  {
    id:2,
    title : '겨울왕국',
    release_date : '2019-12-32',
    director: '제니퍼 리, 크리스벅',
  }
]

const actions = {
  fetchMovies(context){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve()
        context.commit(types.SET_MOVIES, movies)
      },1000)
    })

  }
}

export default actions
