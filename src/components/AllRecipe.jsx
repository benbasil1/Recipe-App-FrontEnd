import React, { useState } from 'react'

const AllRecipe = () => {

  const [data, changeData] = useState(
    [

      { "recipeTitle": "Pan Cakes", "IMGLINK": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Noodles", "IMGLINK": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Stakes", "IMGLINK": "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Fish Fry", "IMGLINK": "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Nachos", "IMGLINK": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Ribs", "IMGLINK": "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Salid", "IMGLINK": "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Steamed Eggs", "IMGLINK": "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Deserts", "IMGLINK": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "French Fries", "IMGLINK": "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Donets", "IMGLINK": "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Sushi", "IMGLINK": "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { "recipeTitle": "Pizza", "IMGLINK": "https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  )
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <br />

              {data.map(
                (value, intex) => {
                  return <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                    <div class="card h-100">
                      <img src={value.IMGLINK} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <p class="card-text">{value.recipeTitle}</p>
                      </div>
                    </div>
                  </div>

                }
              )}






            </div>
          </div>
        </div>
      </div> </div>
  )
}

export default AllRecipe