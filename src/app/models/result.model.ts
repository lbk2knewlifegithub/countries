export interface Result<T> {
  /**
   * - Current page
   */
  page: number;

  /**
   * - Total ip-card possible search
   */
  totalResult: number;


  /**
   * - Total items of page
   */
  pageSize: number;

  /**
   * - Actual ip-card
   */
  result: T;
}
