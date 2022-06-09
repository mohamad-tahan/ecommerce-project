<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

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
            "status" => "Success"
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
}
