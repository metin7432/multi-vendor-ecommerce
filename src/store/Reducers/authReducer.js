import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async(info) => {
        console.log(info);
        
        try {
            // const {data} = await api.post('/admin-login', info,{withCredentials:true})
            // console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
)

export const authReducer = createSlice({ // Reducer ile veri tablolari (sql table mantigi) olusturulur
    name: 'auth', 

initialState: {
        successMesage: '',
        errorMessage: '',
        loader: false,
        userInfo: ''
        
    },
    reducers: {
         

    },
    extraReducers: () => {

    }
});

   export default authReducer.reducer