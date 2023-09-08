'use client';
import RoundedButton from '@/components/atoms/Button/RoundedButton';
import Dropdown from '@/components/atoms/Dropdown';
import { InputText } from '@/components/atoms/InputText';
import ListForNoticeBox from '@/components/atoms/ListForNoticeBox';

import Category from '@/datas/category.data.json';
import { useState } from 'react';

export default function WritePage({}) {
  const [textCount, setTextCount] = useState(0);
  return (
    <>
      <div className="px-5 py-10">
        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">이름</p>
          <InputText
            className="rounded-lg"
            title="상담자 이름"
            id="이름"
            inputType="text"
            placeholder="조*일"
            disabled
          />
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">
            연락처
            <span className="text-[#666] font-bold"> (필수 기재 사항이 아닙니다.)</span>
          </p>
          <InputText
            className="rounded-lg"
            title="상담자 이름"
            id="전화번호"
            inputType="text"
            placeholder="010-4916-8999"
            disabled
          />
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">유형*</p>
          <div className="flex gap-2">
            <Dropdown
              type="category"
              id=""
              mainTitle="대분류"
              subTitle="소분류"
              options={Category}
            />
          </div>
        </div>

        <div className="pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">제목*</p>
          <InputText
            className="rounded-lg"
            title="상담 제목"
            id="제목"
            inputType="text"
            placeholder="제목을 입력해 주세요.(50자 이내)"
          />
        </div>

        {/* TODO: textarea 글자 입력 상태 */}
        <div className="relative pb-4 box-border">
          <p className="pb-2 text-[13px] leading-[21px]">내용*</p>
          <textarea
            className="block w-full h-52 box-border border rounded-lg border-[#e8e8e8] resize-none text-[14px] leading-[24px] py-3 px-4"
            name="content"
            id="cetent"
            maxLength={10000}
          ></textarea>
          <label
            htmlFor="content00"
            className="absolute table left-[-26px] top-12 box-border w-full h-12 px-12 text-sm text-[#767676]"
          >
            <span className="table-cell align-middle text-left text-sm leading-6 break-keep">
              {' '}
              문의하실 내용을 입력해 주세요.
              <br /> 최대 10,000자까지 입력가능합니다.
              <br /> ※ 기재 시 주민등록번호 등 개인정보가
              <br /> 포함되지 않도록 유의하시기 바랍니다.{' '}
            </span>
          </label>
          <span className="absolute right-4 bottom-6 text-xs text-[#666]">
            {textCount}/10,000자
          </span>
        </div>

        <ul className="space-y-2 text-xs">
          <ListForNoticeBox level={2} isBullet>
            * 표는 필수입력 사항입니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            문의 사항 답변 완료 시 APP PUSH로 답변 완료 알림을 드립니다.
          </ListForNoticeBox>
          <ListForNoticeBox level={2} isBullet>
            통화로 답변 받기를 원하시는 경우 연락처 정보를 입력해 주세요.
          </ListForNoticeBox>
        </ul>
      </div>

      <div className="flex justify-between gap-2 px-5 pb-16">
        <RoundedButton className="w-full h-12">취소</RoundedButton>
        <RoundedButton className="w-full h-12" backgroundColor="primary">
          저장
        </RoundedButton>
      </div>
    </>
  );
}
