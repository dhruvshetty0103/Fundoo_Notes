import AxiosHelper from '../helper/axios'

const getNotes = () => {
  const token = localStorage.getItem('token')
  let reqobj = {
    method: 'get',
    url: 'http://localhost:4000/notes',
    headers: {
      Authorization: `bearer ${token}`,
    },
  }
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response
    })
    .catch((err) => {
      throw err
    })
}

const setNotes = (data) => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: 'http://localhost:4000/notes',
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const updateNotes = (data, id) => {
  console.log(id);
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "put",
    url: 'http://localhost:4000/notes/'+id,
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log("error occured");
      throw err;
    });
};

const deleteNote = (id) => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "delete",
    url: 'http://localhost:4000/notes/'+id,
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const setImage = (data) => {
  const token = localStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: "http://localhost:4000/upload-image",
    headers: {
      Authorization: `bearer ${token}`,
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getNotes,setNotes,updateNotes,deleteNote,setImage }
