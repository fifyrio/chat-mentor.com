"use client";
  

const CommentForm = () => {
	return (
		<>
			<div className="bg-[#F8F6F5] rounded-[20px] p-[20px] sm:p-[40px] md:p-[60px]">
				<h2 className="text-[22px] md:text-[25px] lg:text-[28px] mb-[20px] font-semibold text-black">
					Post A Comment
				</h2>

				<form className="space-y-[25px] sm:space-y-[30px]">
					<div>
						<textarea
							placeholder="Your comment"
							rows={6}
							className="resize-y bg-white border-0 rounded-[20px] block w-full focus:outline-none placeholder-[#384179] px-[20px] py-[20px]"
						></textarea>
					</div>

					<div className="grid gap-[25px] grid-cols-1 md:grid-cols-3 items-center">
						<input
							type="text"
							id="name"
							className="bg-white border-0 rounded-[100px] focus:outline-none placeholder-[#384179] block w-full px-[20px] py-[12px]"
							placeholder="Your Name"
							required
						/>

						<input
							type="email"
							id="email"
							className="bg-white border-0 rounded-[100px] focus:outline-none placeholder-[#384179] block w-full px-[20px] py-[12px]"
							placeholder="Your Email"
							required
						/>

						<input
							type="text"
							id="name"
							className="bg-white border-0 rounded-[100px] focus:outline-none placeholder-[#384179] block w-full px-[20px] py-[12px]"
							placeholder="Website"
							required
						/>
					</div>

					<div className="relative flex items-center gap-x-[10px]">
						<input
							id="remember"
							type="checkbox" 
							className="h-[16px] w-[16px] rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
							required
						/>

						<label
							htmlFor="remember"
							className="font-medium text-[14px] text-black"
						>
							Save my name, email, and website in this browser for
							the next time I comment.
						</label>
					</div>

          <button
            type="submit"
            className="py-[15px] px-[35px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
          >
            Submit Now
          </button> 
				</form>
			</div>
		</>
	);
};

export default CommentForm;
