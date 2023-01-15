import React from "react";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 border-gray-200 bg-blue-900">
      <div className="avatar placeholder p-3">
        <div className="bg-slate-400 text-purple-700 content rounded-full w-12">
          <h3>SA</h3>
        </div>
      </div>
      <div className="flex-1 gap-5">
        <a className="btn btn-ghost normal-case text-2xl text-white">
          SocialAPP
        </a>
        <div className="flex flex-1 items-center justify-between">
          <div className="form-control w-full max-w-xs">
            <input type="text" placeholder="Search..." className="input" />
          </div>
        </div>

        <div className="justify-between">
          <label tabIndex={0} className="justify-between:flex-end">
            <a className="btn btn-ghost normal-case text-2xl text-white">
              Devi Andri
            </a>
          </label>
        </div>

        <div className="flex items-center justify-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
