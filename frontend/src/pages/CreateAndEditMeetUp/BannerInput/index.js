import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCamera } from 'react-icons/md';

import api from '../../../services/api';

import { Container, SelectImage } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('File');

  const [banner, setBanner] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setBanner(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner_id">
        {preview ? (
          <img src={preview} alt="Selecionar Imagem" />
        ) : (
          <SelectImage>
            <MdCamera size={60} color="rgba(255, 255, 255, 0.3)" />
            <strong>Selecionar Imagem</strong>
          </SelectImage>
        )}

        <input
          type="file"
          id="banner_id"
          accept="image/*"
          data-file={banner}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
