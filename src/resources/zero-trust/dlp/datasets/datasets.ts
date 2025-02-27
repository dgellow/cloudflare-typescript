// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DatasetsAPI from 'cloudflare/resources/zero-trust/dlp/datasets/datasets';
import * as UploadAPI from 'cloudflare/resources/zero-trust/dlp/datasets/upload';
import { SinglePage } from 'cloudflare/pagination';

export class Datasets extends APIResource {
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);

  /**
   * Create a new dataset.
   */
  create(params: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<DLPDatasetCreation> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/datasets`, { body, ...options }) as Core.APIPromise<{
        result: DLPDatasetCreation;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update details about a dataset.
   */
  update(
    datasetId: string,
    params: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPDataset> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/datasets/${datasetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DLPDataset }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all datasets with information about available versions.
   */
  list(
    params: DatasetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DLPDatasetsSinglePage, DLPDataset> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dlp/datasets`, DLPDatasetsSinglePage, options);
  }

  /**
   * Delete a dataset.
   *
   * This deletes all versions of the dataset.
   */
  delete(
    datasetId: string,
    params: DatasetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/dlp/datasets/${datasetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch a specific dataset with information about available versions.
   */
  get(
    datasetId: string,
    params: DatasetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPDataset> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/datasets/${datasetId}`, options) as Core.APIPromise<{
        result: DLPDataset;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DLPDatasetsSinglePage extends SinglePage<DLPDataset> {}

export interface DLPDataset {
  id: string;

  created_at: string;

  name: string;

  num_cells: number;

  secret: boolean;

  status: 'empty' | 'uploading' | 'failed' | 'complete';

  updated_at: string;

  uploads: Array<DLPDataset.Upload>;

  description?: string | null;
}

export namespace DLPDataset {
  export interface Upload {
    num_cells: number;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    version: number;
  }
}

export type DLPDatasetArray = Array<DLPDataset>;

export interface DLPDatasetCreation {
  dataset: DLPDataset;

  max_cells: number;

  /**
   * The version to use when uploading the dataset.
   */
  version: number;

  /**
   * The secret to use for Exact Data Match datasets. This is not present in Custom
   * Wordlists.
   */
  secret?: string;
}

export interface DatasetCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param: Generate a secret dataset.
   *
   * If true, the response will include a secret to use with the EDM encoder. If
   * false, the response has no secret and the dataset is uploaded in plaintext.
   */
  secret?: boolean;
}

export interface DatasetUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  name?: string | null;
}

export interface DatasetListParams {
  account_id: string;
}

export interface DatasetDeleteParams {
  account_id: string;
}

export interface DatasetGetParams {
  account_id: string;
}

export namespace Datasets {
  export import DLPDataset = DatasetsAPI.DLPDataset;
  export import DLPDatasetArray = DatasetsAPI.DLPDatasetArray;
  export import DLPDatasetCreation = DatasetsAPI.DLPDatasetCreation;
  export import DLPDatasetsSinglePage = DatasetsAPI.DLPDatasetsSinglePage;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import Upload = UploadAPI.Upload;
  export import DLPDatasetNewVersion = UploadAPI.DLPDatasetNewVersion;
  export import UploadCreateParams = UploadAPI.UploadCreateParams;
  export import UploadEditParams = UploadAPI.UploadEditParams;
}
