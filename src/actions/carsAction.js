import axios from "axios";

export const GET_CARS = "GET_CARS";

export const getCars = (available, year, capacity) => {
    if(available === 'true' && available) available = true
    else if(available === 'false' && available) available = false
    if(year) year = parseInt(year)
    if(capacity) capacity = parseInt(capacity)
    
  return (dispatch) => {
    //loading
    dispatch({
        type: GET_CARS,
        payload: {
            loading: true,
            data: null,
            error: null
        },
    })

    //get API
    axios({
        method: "GET",
        url: "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json",
        timeout: 120000,
    })
    .then((response) => {
        console.log("tes3", available, year, capacity)
        let data;
        if ((available!==undefined || available!==null) && year && capacity) {
            data = response.data.filter((car) => {
                return car.available == available && car.year == year && car.capacity == capacity
            });
            console.log("tes4", data)
        }
        else{
            data = response.data;
            //test aja
            // data = response.data.filter((car) => {
            //     return car.available == true && car.year == 2022 && car.capacity == 2
            // });
        }
        if(data.length <= 0){
            dispatch({
                type: GET_CARS,
                payload: {
                    loading: false,
                    data: null,
                    error: null
                },
            })
        }
        else{
            dispatch({
                type: GET_CARS,
                payload: {
                    loading: false,
                    data: data,
                    error: null
                },
            })
        }        
    })
    .catch((error) => {
        dispatch({
            type: GET_CARS,
            payload: {
                loading: false,
                data: null,
                error: error
            },
        })
    })
  }
}