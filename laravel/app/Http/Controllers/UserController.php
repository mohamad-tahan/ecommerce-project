<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
  public function addFavorites(Request $request){
    
      $user = Auth::user();
      $user_id = $user->id;
      $fav = new Favorite();
      $fav->user_id = $user_id;
      $fav->item_id = $request->item_id;
    
      
      $fav->save();
      
      return response()->json([
          "status" => "Added to Favorites",
          "favorites" => $fav
      ], 200);
      
   

  //   return response()->json([
  //     "status" => "You are not logged in"
     
  // ], 200);
  
}





      
  }

