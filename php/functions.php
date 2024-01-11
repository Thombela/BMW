<?php

include('./conn.php');

function select($table, $conditions = []){
    $sql = 'SELECT * FROM ' . $table;
    if(!empty($conditions)){
        $i = 0;
        foreach($conditions as $index => $condition){
            if($i == 0){
                $sql = $sql . ' WHERE ' . $index . ' = "' . $condition . '"';
            }
            else{
                $sql = $sql . ' AND ' . $index . ' = "' . $condition . '"';
            }
            $i++;
        }
    }
    global $conn;
    $results = $conn->query($sql);
    //$results = $results->fetch_all();
    return $results;
}
function insert($table, $data){
    $sql = 'INSERT INTO ' . $table . ' (';
    $i = 0;
    foreach($data as $index => $column){
        if($i == 0){
            $sql = $sql . $index;
        }
        else{
            $sql = $sql . ', ' . $index;
        }
        $i++;
    }
    $i = 0;
    $sql = $sql . ') VALUES (';
    foreach($data as $index => $column){
        if($i == 0){
            $sql = $sql . '"' . $column . '"';
        }
        else{
            $sql = $sql . ', "' . $column . '"';
        }
        $i++;
    }
    $sql = $sql . ')';
    echo $sql;
    global $conn;
    return $conn->query($sql);
}
function update($table, $id, $data){
    $sql = 'UPDATE ' . $table . ' SET ';
    $i = 0;
    foreach($data as $index => $column){
        if($i == 0){
            $sql = $sql  . $index . ' = ' . $column;
        }
        else{
            $sql = $sql . ', ' . $index . ' = ' . $column;
        }
        $i++;
    }
    $sql = $sql . ' WHERE id = ' . $id;
    global $conn;
    return $conn->query($sql);
}
function delete($table, $id){
    $sql = 'DELETE FROM ' . $table . ' WHERE id = ' . $id;
    echo $sql;
    global $conn;
    return $conn->query($sql);
}