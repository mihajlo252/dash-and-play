import {supabase} from "../supabase/supabase";

export const getData = async (table: string) => {
    const {data, error} = await supabase.from(table).select();
    if (error) {
        throw error;
    }
    return data
}
