<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;
use App\Models\Favorite;

class AdminController extends Controller
{
  
    public function addItem(Request $request){
        $item = new Item;
        $item->name = $request->name;
        $item->price = $request->price;
        $item->category_id = $request->category_id;
        $item->image = $request->image;
        
        $item->save();
        
        return response()->json([
            "status" => "Item Added"
        ], 200);
    }

    public function getAllItems($id = null){
        if($id != null){
            
            $items = Item::find($id);
            
        }else{
            $items = Item::all();
        }
        
        return response()->json([
            "status" => "Success",
            "items" => $items
        ], 200);
    }

    public function addCategory(Request $request){
        $cat = new Category();
        $cat->name = $request->name;
       
        $cat->save();
        
        return response()->json([
            "status" => "Category Saved"
        ], 200);
    }

    public function getAllCategories($id = null){
        if($id != null){
            
            $cats = Category::find($id);
            
        }else{
            $cats = Category::all();
        }
        
        return response()->json([
            "status" => "Success",
            "Categories" => $cats
        ], 200);
    }

    public function getItemsbyCategoryId(Request $request,$id){
        $items = Item::where("category_id", $id)->get();
        return response()->json([
            "status" => "Success",
            "items" => $items
        ], 200);
    }


    public function getAllFavorites($id = null){
        if($id != null){
            
            $favs = Favorite::find($id);
            
        }else{
            $favs = Favorite::all();
        }
        
        return response()->json([
            "status" => "Success",
            "Categories" => $favs
        ], 200);
      }
      
    

}
