import React from "react";

export const CardLocation = ({ location = {} }) => {
	return (
		<>
			<div className='my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1'>
				<a href={location.url} className='cursor-pointer'>
					<figure>
						<figcaption className='p-4'>
							<p
								className='text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300'
								x-text='post.title'
							>
								{location.name}
							</p>

							<div className='flex flex-col gap-1'>
								<small
									className='leading-5 text-gray-500 dark:text-gray-400'
									x-text='post.description'
								>
									Type: {location.type}
								</small>
								<small
									className='leading-5 text-gray-500 dark:text-gray-400'
									x-text='post.description'
								>
									Dimension: {location.dimension}
								</small>
							</div>
						</figcaption>
					</figure>
				</a>
			</div>
		</>
	);
};
