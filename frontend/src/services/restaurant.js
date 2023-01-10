import http from "../http-common";

const url = 'cp9-app-restaurant-reviews-s6oc-4e1ldmt3n-f-seif.vercel.app';

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(url + `restaurants?page=${page}`);
  }

  get(id) {
    return http.get(url + `/restaurant?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(url + `restaurants?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post(url + "/review-new", data);
  }

  updateReview(data) {
    return http.put(url + "/review-edit", data);
  }

  deleteReview(id, userId) {
    return http.delete(url + `/review-delete?id=${id}`, {data:{user_id: userId}});
  }

  getCuisines(id) {
    return http.get(url + `/cuisines`);
  }

}

export default new RestaurantDataService();
