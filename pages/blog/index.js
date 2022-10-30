import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Link href={"/"}>
        <a>Go to dashboard</a>
      </Link>
    </div>
  );
};

export default index;
