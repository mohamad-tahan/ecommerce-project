<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class AdminController extends Controller
{
  

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
