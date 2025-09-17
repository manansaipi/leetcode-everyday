// https://leetcode.com/problems/design-a-food-rating-system/?envType=daily-question&envId=2025-09-17

import java.util.*;

class FoodRatings {


    // [
    //     [
    //         ["kimchi","miso","sushi","moussaka","ramen","bulgogi"],
    //         ["korean","japanese","japanese","greek","japanese","korean"],
    //         [9,12,8,15,14,7]
    //     ],
    //     ["korean"],["japanese"],["sushi",16],["japanese"],["ramen",16],["japanese"]
    // ]
        private static class Food {
            String name;
            int rating;
    
            Food(String name, Integer rating){
                this.name = name;
                this.rating = rating;
            }
        }
    
        Map<String, PriorityQueue<Food>> listFoods = new HashMap<>();
        Map<String, String> foodCuisine = new HashMap<>();
        Map<String, Integer> foodRating = new HashMap<>();
    
        public FoodRatings(String[] foods, String[] cuisines, int[] ratings) {
    
            for(int i=0; i< foods.length; i++){
                String food = foods[i];
                String cuisine = cuisines[i];
                int rating = ratings[i];
    
                foodCuisine.put(food, cuisine);
                foodRating.put(food, rating);
    
                listFoods.putIfAbsent(cuisine, new PriorityQueue<>((a, b) -> {
                    if( a.rating != b.rating ){
                        return b.rating - a.rating;
                    }
                    return a.name.compareTo(b.name);
                }));
                listFoods.get(cuisine).add(new Food(food, rating));
    
                
            }
        }
        
        public void changeRating(String food, int newRating) {
            foodRating.put(food, newRating);
            String cusine = foodCuisine.get(food);
            listFoods.get(cusine).add(new Food(food, newRating));
        }
        
        public String highestRated(String cuisine) {
            PriorityQueue<Food> pq = listFoods.get(cuisine);
    
            while (true) {
                Food top = pq.peek();
                int currentRating = foodRating.get(top.name);
    
                // check if this entry is still valid
                if (top.rating == currentRating) {
                    return top.name;
                }
                pq.poll(); // remove stale entry
            }
        }
    
    }
    
    
    /**
     * Your FoodRatings object will be instantiated and called as such:
     * FoodRatings obj = new FoodRatings(foods, cuisines, ratings);
     * obj.changeRating(food,newRating);
     * String param_2 = obj.highestRated(cuisine);
     */