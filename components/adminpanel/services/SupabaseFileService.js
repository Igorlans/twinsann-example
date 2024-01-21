import {createClient} from "@supabase/supabase-js";

class SupabaseFileService {
	supabase;
	constructor() {
		this.supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY,{auth: {persistSession: false}});
	}

	async uploadFile(file, bucketName, fileName, path) {
		try {
			// console.log('UPLOAD', file)
			const { data, error } = await this.supabase.storage
				.from(bucketName)
				.upload(`${path+'/' || ""}${fileName}`, file);

			if (error) {
				console.error(error);
				throw Error(error)
			}
			console.log('SUPABASE ===============', data)
			return data
		} catch (e) {
			console.log(e)
			throw Error(e)
		}
	}
}

export default new SupabaseFileService();