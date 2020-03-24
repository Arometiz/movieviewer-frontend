function counter(currentPage = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return currentPage + 1;
    case "DECREMENT":
        if(currentPage != 0){
            return currentPage - 1;
        }else{
            return currentPage;
        }
    default:
      return currentPage;
  }
}
