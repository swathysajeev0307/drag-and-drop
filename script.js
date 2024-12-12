/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

function drag(){

    let dragging = false;
    let mouseX, mouseY;
    let eleX, eleY;

    const boxes = document.querySelectorAll("[draggable");

    boxes.forEach(box =>{
        
        box.addEventListener('mousedown', mouseDown);
        box.style.top = 0;
        box.style.left = 0;
    });

    function mouseDown(e){
        e.preventDefault();

        dragging = this;

        mouseX = e.pageX;
        mouseY = e.pageY;

        eleX = Number.parseInt(dragging.style.left);
        eleY = Number.parseInt(dragging.style.top);

        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup",mouseUp);
    }

    function mouseMove(e){

        if(dragging){
            const deltaMouseX = e.pageX - mouseX;
            const deltaMouseY = e.pageY - mouseY;

            dragging.style.left = deltaMouseX + eleX + "px";
            dragging.style.top = deltaMouseY + eleY + "px";
        }

    }

    function mouseUp(e){

        dragging = false;

    }
}

drag();