import {supabase} from "../supabase/supabase";

export const sendData = async (table: string, id: string, value: number) => {
    const { error } = await supabase.from(table).update({currentHP: value}).eq("id", id)
    if (error) {
        throw error;
    }
}
