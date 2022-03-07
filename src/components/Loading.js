import React from "react";

function Loading() {
  return (
    <div class="text-center py-5 my-5 text-warning">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
